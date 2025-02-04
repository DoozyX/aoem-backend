import { ADMIN_AUTH, Api } from '@test/utils';

describe('Reports', () => {
  it('should generate report', async () => {
    const api = await Api.withLogin(ADMIN_AUTH);
    const res = await api.reports.reportsControllerReport(
      new Date().getFullYear(),
      new Date().toISOString(),
    );
    expect(res).toBeDefined();
    expect(res.name).toBeDefined();
    expect(res.id).toBeDefined();
  });
});
