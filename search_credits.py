with open('src/apps/minecraft/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    line_num = 0
    while True:
        line = f.readline()
        if not line:
            break
        line_num += 1
        if 'credits' in line.lower():
            print(f"Found 'credits' on line {line_num}")
            print(line[:200]) # Print start of line
