const normalizeSrc = src => {
  return src.startsWith('/') ? src.slice(1) : src;
};

export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  const baseUrl = 'https://imagedelivery.net/h3hu1Eahp8wkKEQ_lacg7g';
  return `${baseUrl}/${normalizeSrc(src)}/public?${paramsString}`;
};
