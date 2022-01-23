const getIpFromApi = async () => {
  const response = await fetch('https://ip-fast.com/api/ip/');
  return response.text();
};

export default getIpFromApi;