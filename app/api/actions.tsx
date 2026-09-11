"use server";

import { supabase } from "@/lib/supabase";

export async function insertTodo(formData: FormData) {
    const name = formData.get("name") as string;
    const file = formData.get("path") as File;
    const created_at = formData.get("created_at") as string;

    if (!file || file.size === 0) {
        return { success: false, error: "Nenhum arquivo selecionado" };
    }

    // 1. Gera um nome único pro arquivo, pra evitar sobrescrever arquivos com o mesmo nome
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

    // 2. Faz upload pro bucket "pdfs" no Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
        .from("storage")
        .upload(fileName, file);

    if (uploadError) {
        console.error("Error uploading file:", uploadError.message);
        return { success: false, error: uploadError.message };
    }

    // 3. Pega a URL pública do arquivo
    const { data: publicUrlData } = supabase.storage
        .from("storage")
        .getPublicUrl(uploadData.path);

    const path = publicUrlData.publicUrl;

    // 4. Insere o registro na tabela com o path/URL do arquivo
    const { data, error } = await supabase
        .from("pdfs")
        .insert([{ name: name, path: path, created_at: created_at }])
        .select();

    if (error) {
        console.error("Error inserting data:", error.message);
        return { success: false, error: error.message };
    }

    return { success: true, data };
}