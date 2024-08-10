test('sleep for 683 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 683));
});