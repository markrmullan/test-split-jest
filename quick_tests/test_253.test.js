test('sleep for 893 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 893));
});