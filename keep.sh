#!/bin/bash
while true; do
    curl http://localhost:3000 > /dev/null 2>&1
    sleep 10
done