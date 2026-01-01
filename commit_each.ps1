$files = @()
$files += git diff --name-only
$files += git ls-files --others --exclude-standard
foreach ($f in $files) {
    if ($f -and $f.Trim() -ne "") {
        git add -- "$f"
        git commit -m "chore: update $f"
    }
}