#!/usr/bin/bash
curl -sD - "$1" | grep Content-Length | cut -d " " -f 2
