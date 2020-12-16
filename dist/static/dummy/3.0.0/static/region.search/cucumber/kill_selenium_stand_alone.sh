#!/bin/bash

# shellcheck disable=SC2046
kill $(ps aux | pgrep -f -d " " selenium)
