# Project notes

## concept-4 is a frozen backup — do not edit without explicit confirmation

`concept-4/` is a byte-for-byte backup copy of `concept-3/` (the client-approved final design), kept untouched on purpose as a safety net.

**If the user ever asks to change, edit, update, or otherwise modify anything in `concept-4/`, do not make the edit yet.** First ask the user to explicitly confirm they really want `concept-4` touched (not `concept-3`), since it exists specifically so they always have an unmodified copy to fall back on. Only proceed once they've confirmed.

This restriction applies only to `concept-4/`. `concept-3/` is the live, actively-developed site and can be edited normally.

### Standing exception: the cross-concept switcher bar

`concept-4/` (along with `concept-2/` and `concept-3/`) includes a shared `#concept-switcher` nav bar (markup at the top of `<body>`, styles in `../concept-switcher.css`) that lets you click between the concepts while reviewing them. This was added to `concept-4` with explicit user confirmation and does not count as "changing" the design it's a backup of — it's a navigation aid layered on top, not a modification of the frozen page content/layout below it.

Future tweaks to the switcher bar itself (its markup, styling, or the set of links it contains) may be applied to `concept-4/` without re-asking. Any other edit to `concept-4/` still requires explicit confirmation per the rule above.
