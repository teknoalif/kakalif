export default async function sitemap() {
  return [
    {
      url: 'https://kakalif.my.id',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
