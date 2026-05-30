import zipfile
with zipfile.ZipFile('job-76605953158-logs.zip') as z:
    print(z.namelist())
    for n in z.namelist():
        print('---', n)
        data = z.read(n).decode('utf-8', errors='replace')
        print(data[:4000])

