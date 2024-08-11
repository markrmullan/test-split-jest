test('sleep for 12752 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 12752));
});