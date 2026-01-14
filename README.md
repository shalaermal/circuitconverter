# Circuit Name Converter (RFC2544)

This is a small utility built to solve a very specific, everyday problem during **RFC2544 testing**.

In our workflow, test results must be attached using a **strict file-naming standard** defined by the company.  
Manually converting circuit names and appending the correct test date is repetitive and error-prone, especially when handling multiple circuits at once.

This tool automates that step.

## What it does

- Takes one or more **circuit names** (one per line)
- Converts them to the **company RFC2544 naming format**
- Appends the selected **test date** to the filename
- Outputs ready-to-use `.txt` filenames for attaching test results

Example input:
- TX/VLXP/549605/001/WINW/
- TX/VLXP/549605/002/WINW/

Example output:
- TX.VLXP.549605.001.WINW.RFC2544.01.14.2026.txt
- TX.VLXP.549605.002.WINW.RFC2544.01.14.2026.txt


## Why this exists

During RFC2544 testing, results are only accepted if they follow the **exact naming convention**.  
This tool removes manual formatting, ensures consistency, and speeds up the process when multiple circuits are tested on the same day.

It is meant to be:
- quick
- simple
- reliable
- and used directly during day-to-day testing work

## How it works

1. Paste circuit names (each on a new line)
2. Select the test date (defaults to today, `MM/DD/YYYY`)
3. Click **Convert with Date**
4. Copy the generated filenames and attach test results using that format

## Notes

- The format follows the internal RFC2544 test result naming standard used by the company
- The tool runs fully in the browser
- No backend, no data storage, no external dependencies


