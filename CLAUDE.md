# Project notes

## concept-4 is a frozen backup — do not edit without explicit confirmation

`concept-4/` is a byte-for-byte backup copy of `concept-3/` (the client-approved final design), kept untouched on purpose as a safety net.

**If the user ever asks to change, edit, update, or otherwise modify anything in `concept-4/`, do not make the edit yet.** First ask the user to explicitly confirm they really want `concept-4` touched (not `concept-3`), since it exists specifically so they always have an unmodified copy to fall back on. Only proceed once they've confirmed.

This restriction applies only to `concept-4/`. `concept-3/` is the live, actively-developed site and can be edited normally.
