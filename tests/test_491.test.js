test('sleep for 521 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 521));
});