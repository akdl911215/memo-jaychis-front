// lib/draftSession.ts
import { v4 as uuidv4 } from 'uuid';

export function getOrSetDraftId() {
  let draftId = document.cookie
    .split('; ')
    .find((row) => row.startsWith('draftId='))
    ?.split('=')[1];

  if (!draftId) {
    draftId = uuidv4();
    document.cookie = `draftId=${draftId}; Path=/; Max-Age=${60 * 60 * 24 * 7}`; // 7 days
  }
  return draftId;
}
