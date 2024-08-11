test('sleep for 992 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 992));
});