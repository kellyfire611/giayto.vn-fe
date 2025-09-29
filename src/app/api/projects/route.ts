import { query } from "@/lib/db";
import { NextResponse } from "next/server";
import type { PmProject } from "@/types/db";

export async function GET() {
  try {
    const rows = await query({
      query: "SELECT * FROM pm_projects",
      values: [],
    });

    return NextResponse.json(rows as PmProject[], { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
