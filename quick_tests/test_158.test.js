test('sleep for 891 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 891));
});