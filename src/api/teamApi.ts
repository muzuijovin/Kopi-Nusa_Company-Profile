import { dataApi } from "@/lib/backendless";

// tabel `Team` di Backendless
export interface TeamMember {
  objectId: string;
  fullName: string;
  role: string;
  category: string;
  description: string;
  photoUrl: string;
  sortOrder: number;
}

export async function GetTeamApi() {
  const res = await dataApi.get<TeamMember[]>("/data/Team", {
    params: { sortBy: "sortOrder", pageSize: 50 },
  });
  return res.data;
}
