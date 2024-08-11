test('sleep for 887 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 887));
});