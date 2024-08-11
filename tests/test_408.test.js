test('sleep for 741 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 741));
});