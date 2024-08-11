test('sleep for 966 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 966));
});