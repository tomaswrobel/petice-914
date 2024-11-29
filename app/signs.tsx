"use client";

import {useEffect, useState} from "react";

export default async function Signs() {
	const [signs, setSigns] = useState();

	useEffect(() => {
		fetch("https://portal.gov.cz/epetice/api/v1/petice/914")
			.then(r => r.json())
			.then(({pocetPodpisu}) => setSigns(pocetPodpisu));
	}, []);

	return <p className="text-2xl text-slate-800 dark:text-slate-50 mb-6">{signs}</p>;
}
