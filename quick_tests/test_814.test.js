test('sleep for 362 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 362));
});