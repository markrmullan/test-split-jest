test('sleep for 326 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 326));
});