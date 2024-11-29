"use client";

import {useEffect, useState} from "react";

export default function Signs() {
	const [signs, setSigns] = useState<string>();
	useEffect(() => void fetch("/api").then(r => r.text()).then(setSigns), []);
	return <p className="text-2xl text-slate-800 dark:text-slate-50 mb-6">{signs}</p>;
}
