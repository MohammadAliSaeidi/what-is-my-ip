async function getIp()
{
	const request = await fetch("https://api.ipify.org?format=json");

	return (await request.json()).ip;
}

async function getIpInfo()
{
	const ip = await getIp();
	const request = await fetch(`https://ipwhois.app/json/${ip}`);

	return await request.json();
}

export default getIpInfo;
