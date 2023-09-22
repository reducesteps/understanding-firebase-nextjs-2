#!/bin/bash

# Replace all instances of 'Jonathan Oakey' with 'Jonathan David Oakey'
find . -type f -name '*.md' -o -name '*.html' -exec sed -i 's/Jonathan Oakey/Jonathan David Oakey/g' {} +