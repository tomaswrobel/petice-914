export async function GET() {
	const {pocetPodpisu} = await fetch("https://portal.gov.cz/epetice/api/v1/petice/914").then(r => r.json());
	return new Response(`${pocetPodpisu}`);
}
