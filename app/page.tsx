export default async function Home() {
	const {pocetPodpisu} = await fetch("https://portal.gov.cz/epetice/api/v1/petice/914").then(r => r.json());

	return (
		<div className="bg-[#f5f5f5] text-slate-800 p-4 lg:p-10 dark:bg-slate-950 dark:text-slate-50">
			<h1 className="text-4xl font-light my-8">
				Začlenění práva na potrat i jinou tělesnou svobodu do Listiny základních práv a svobod
			</h1>
			<main className="bg-white max-w-screen-md p-4 my-8 lg:p-8 dark:bg-slate-900">
				<p className="text-slate-950 mb-7 tracking-wide font-bold dark:text-slate-50">
					Základní, lidská práva. Ach ano. A co má každý člověk? Tělo! Jak to že tedy mezi lidskými právy
					zcela chybí ochrana tělesné svobody? Především se ale petice zasazuje o začlenění potratu mezi
					lidská práva, kdy Listina jen vágně deklaruje: „Lidský život je hoden ochrany i před narozením“.
				</p>
				<p className="text-right">
					Parlament České republiky
					<br />
					Poslanecká sněmovna
					<br />
					Sněmovní 176/4
					<br />
					Malá Strana
					<br />
					118 00 Praha 1
				</p>
				<p className="mb-2">Zmocnění: § 1 odst. 1 zákona č. 85/1990 Sb.</p>
				<h2 className="font-bold text-2xl my-4">
					Petice o začlenění práva na potrat i jinou tělesnou svobodu do Listiny základních práv a svobod
				</h2>
				<p className="mb-6">Vážení poslanci,</p>
				<p className="my-4">
					my, níže podepsaní občané České republiky, obracíme se na Vás, jako na námi zvolené ústavodárce
					s&nbsp;prosbou o změnu Listiny základních práv a svobod tak, abychom měli ústavně zaručenou tělesnou
					svobodu, včetně práva na potrat i právo odmítnout zákroky na svém těle.
				</p>
				<p className="my-4">
					Věříme totiž, že člověka tvoří vedle duše i tělo, a jeho základním právem by proto mělo být
					rozhodování o něm.
				</p>
				<p className="my-4">
					Žena má ten dar přivést nový život na svět a Listina by měla jednoznačně tento dar odmítnout jako
					povinnost. Během těhotenství se tělo ženy namáhá a za situace, kdy potrat vůbec zvažuje, o&nbsp;to
					víc.
				</p>
				<p className="my-4">
					Právo na tělesnou integritu zmiňuje občanský zákoník, podmínku souhlasu nalezneme v&nbsp;zákonu o
					zdravotních službách. Je to přitom něco, co patří do stejné kategorie jako právo na život nebo
					postup zadržení ve zdravotním ústavu, který je v&nbsp;Listině též nastíněn. A není to věc o nic méně
					důležitá.
				</p>
				<p className="mt-4 mb-2">Článek by mohl vypadat například takto:</p>
				<h3 className="font-black my-1">Článek X</h3>
				<p>
					(1) Každý má právo odmítnout zákrok na svém těle. Zákon může stanovit výjimku v&nbsp;případě ochrany
					veřejného zdraví nebo v&nbsp;případě, jde-li o vážné ohrožení života nebo zdraví.
				</p>
				<p>
					(2) Žena má právo na potrat. Je nepřípustné ženu nutit do takovéhoto či podobného rozhodnutí.
					Podrobnosti stanoví zákon.
				</p>
				<p className="text-lg my-6">Moje tělo, moje volba</p>
				<hr className="my-6" />
				<p className="my-6">Petici připravil</p>
				<table cellPadding={7} cellSpacing={0} className="w-full">
					<tbody>
						<tr>
							<td className="border border-black p-1 dark:border-white">
								<p>Tomáš Wróbel</p>
							</td>
							<td className="border border-black p-1 dark:border-white">
								<p>
									Opavská 818/71,
									<br />
									708 00 Ostrava-Poruba
								</p>
							</td>
							<td className="border border-black p-1 dark:border-white">
								<p>
									<img
										src="/podpis.png"
										width="92"
										height="49"
										className="dark:invert"
										alt="Wróbel"
									/>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
				<p className="mt-8">
					<a
						href="https://portal.gov.cz/e-petice/914-zacleneni-prava-na-potrat-i-jinou-telesnou-svobodu-do-listiny-zakladnich-prav-a-svobod"
						target="_blank"
						className="text-brand underline"
					>
						<svg viewBox="0 0 512 512" className="w-4 h-4 inline-block mr-2" fill="currentColor">
							<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
						</svg>
						Portál ePetice
					</a>
				</p>
			</main>
			<h2 className="text-2xl text-slate-800 dark:text-slate-50">Aktuální počet podpisů</h2>
			<p className="text-2xl text-slate-800 dark:text-slate-50 mb-6">{pocetPodpisu}</p>
			<p>
				<span className="rounded-[4px] bg-black inline-block">
					<a
						href="https://obcan.portal.gov.cz/podani/epetice/seznam/petice/914"
						className="text-white rounded-[4px] p-4 inline-block bg-brand hover:bg-opacity-80"
					>
						Podepsat petici
					</a>
				</span>
			</p>
		</div>
	);
}
