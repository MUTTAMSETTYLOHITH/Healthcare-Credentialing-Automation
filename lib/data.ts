export type Provider = {
  id: string; name: string; specialty: string; facility: string;
  status: "Intake" | "Primary Source" | "Committee" | "Complete" | "At Risk";
  progress: number; risk: "Low" | "Medium" | "High";
};

export const providers: Provider[] = [
  { id: "P-101", name: "Dr. Maya Chen", specialty: "Cardiology", facility: "North", status: "Intake", progress: 35, risk: "Low" },
  { id: "P-102", name: "Dr. Rafael Soto", specialty: "Orthopedics", facility: "East", status: "Primary Source", progress: 62, risk: "Medium" },
  { id: "P-103", name: "NP Aisha Khan", specialty: "Primary Care", facility: "South", status: "Committee", progress: 86, risk: "Low" },
  { id: "P-104", name: "Dr. Liam Patel", specialty: "Neurology", facility: "West", status: "At Risk", progress: 70, risk: "High" },
  { id: "P-105", name: "Dr. Emma Brooks", specialty: "Anesthesiology", facility: "Surgery", status: "Intake", progress: 28, risk: "Low" },
  { id: "P-106", name: "PA Jordan Reed", specialty: "Emergency", facility: "Main ED", status: "Primary Source", progress: 55, risk: "Medium" },
  { id: "P-107", name: "Dr. Noor Rahman", specialty: "Pediatrics", facility: "Children's", status: "Committee", progress: 79, risk: "Low" },
  { id: "P-108", name: "Dr. Ava Nguyen", specialty: "Oncology", facility: "Cancer Center", status: "Complete", progress: 100, risk: "Low" },
];

export const verifications = Array.from({length: 14}).map((_,i)=>{
  const types = ["License Primary Source","DEA Check","OIG Exclusion","Board Certification","Education Verification"];
  const states = ["Pending","In Progress","Complete"];
  const priorities = ["Low","Medium","High","Urgent"];
  return {
    id: `V-${401+i}`,
    providerId: providers[(i*3)%providers.length].id,
    type: types[i % types.length],
    state: states[i % states.length],
    priority: priorities[(i+1) % priorities.length],
    slaHoursLeft: ((i*7)%60) - (i%3===0? 2:0),
    assignee: ["Team A","Team B","Team C"][i%3],
  }
});

export const throughput = [
  { day: "Mon", value: 7 },{ day: "Tue", value: 11 },{ day: "Wed", value: 5 },
  { day: "Thu", value: 13 },{ day: "Fri", value: 8 },{ day: "Sat", value: 3 },{ day: "Sun", value: 2 }
];
