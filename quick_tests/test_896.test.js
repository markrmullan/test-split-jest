test('sleep for 734 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 734));
});