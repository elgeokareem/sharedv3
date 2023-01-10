import { describe, expect, test } from '@jest/globals';

import { fetchOverviewStats } from '../services';

import { createClient } from '../../../shared/tests/graphql';

describe('Overview Stats Test', () => {
  const endpoint = 'https://api.insightt.io/graphql';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzU4LCJkYk5hbWUiOiJycmFfZGIiLCJpYXQiOjE2NzEwMTcxNzEsImV4cCI6MTY3MzYwOTE3MX0.pU7z0AuAH5-nPO4yKRfNEYFskfH-8g0kqYYiwjFXLLU';

  const input = {
    client: createClient(endpoint, token),
    startDate: '2022-12-01T05:00:00Z',
    endDate: '2023-01-01T04:59:59Z',
    previousStartDate: '2021-12-01T05:00:00Z',
    previousEndDate: '2022-01-01T04:59:59Z',
    rdnStartDate: '2022-12-01T07:00:00Z',
    rdnEndDate: '2023-01-01T06:59:59Z',
    rdnPreviousStartDate: '2021-12-01T07:00:00Z',
    rdnPreviousEndDate: '2022-01-01T06:59:59Z',
  };

  test('Get overview stats', async () => {
    const overviewStats = await fetchOverviewStats(input);

    expect(overviewStats.currentAssignments).toBe(4009);
    expect(overviewStats.previousAssignments).toBe(3732);
    expect(overviewStats.currentRepossessions).toBe(1236);
    expect(overviewStats.previousRepossessions).toBe(1007);
    expect(overviewStats.currentMissedRepossessions).toBe(190);
    expect(overviewStats.previousMissedRepossessions).toBe(30);
  });
});
