// The Absurd Clause Contest — entry for @anggianugrah214-eng
// Judge brief (from kit): deadpan comedy editor; pick the clause that
// (1) could hide deep inside a terms-of-service agreement,
// (2) is funny on its own in one reading, no outside setup,
// (3) sounds like real legal boilerplate until the absurdity hits,
// (4) is original and specific, with a concrete absurd image,
// (5) is tight: one clean sentence, no wasted words, no explaining the joke.
//
// Candidate drafts (first pass, ~10 lines):
//  1. By accepting these Terms, you agree that any dispute shall be resolved by trial by combat, with the Company's champion being a retired professional wrestler named Greg.
//  2. In the event of a service outage exceeding four (4) hours, the Company shall dispatch one (1) emotionally supportive goat to your registered address within two business days.
//  3. You agree that we may collect, process, and occasionally whisper your personal data to a houseplant located at our headquarters for quality assurance purposes.
//  4. Upon termination of your account, all remaining credits shall be converted into commemorative spoons and mailed to an address chosen at random from our user base.
//  5. The Company reserves the right, upon thirty (30) days' written notice, to rename your firstborn child "Synergy" for internal reporting purposes.
//  6. By continuing to use the Service after midnight, you consent to be legally considered a raccoon for the purposes of our waste management policy.
//  7. Any notice delivered under this Agreement shall be deemed received when read aloud by our Chief Legal Officer into a conch shell at low tide.
//  8. You grant us a perpetual, irrevocable licence to use your dreams, provided we return them washed, folded, and with no more than minor scorching.
//  9. If any provision of this Agreement is held unenforceable, the remaining provisions shall continue in full force, and the unenforceable one shall be fed to the office axolotl.
// 10. Arbitration shall take place at a location selected by throwing a dart at a map while blindfolded, and both parties agree to pretend that this is normal.
//
// First-pass notes:
// - #1 trial by combat is a well-worn joke; Greg helps but the trope is familiar.
// - #4 spoons and #6 raccoon are absurd early — the register breaks too soon.
// - #10 explains its own joke at the end ("pretend this is normal") — cut on criterion 5.
// - #2, #7, #8, #9 keep the boilerplate voice longest before the turn.
//
// Revision pass:
// - #9 wins: severability is the most genuinely "buried" clause in any ToS —
//   nobody reads it, which is exactly where the brief wants the joke hidden.
//   Its absurdity lands in the final five words, after a full sentence of
//   plausible law, so it ambushes instead of announcing itself.
// - Tightened to the authentic severability formula "shall remain in full
//   force and effect" (the phrase real agreements actually use) to deepen
//   the register before the turn, and named the victim "the unenforceable
//   provision" rather than "the unenforceable one" for a cleaner legal echo.
// - Runner-up #8 (dreams returned washed and folded) is charming but its
//   premise is absurd from the first word "dreams", so it ambushes less.
// - Final line is one sentence, well under the 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "If any provision of this Agreement is held unenforceable, all other provisions shall remain in full force and effect, and the unenforceable provision shall be fed to the office axolotl.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
