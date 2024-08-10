test('sleep for 641 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 641));
});