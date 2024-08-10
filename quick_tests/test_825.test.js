test('sleep for 139 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 139));
});