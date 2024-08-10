test('sleep for 373 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 373));
});