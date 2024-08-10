test('sleep for 711 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 711));
});