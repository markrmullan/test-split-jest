test('sleep for 995 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 995));
});