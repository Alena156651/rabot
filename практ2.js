var i,n; a:array[1.10];
begin
write('Введите размер массива: '); 
readln(n);
writeln('Введите значения элементов массива, разделяя их пробелами');
for (i=1) to n; 
do read(a[i]);
while (i=1) to n;
do write(a[ i]:8);
while (i=n) downto 1; 
do write(a[i]:8);
while ('Для выхода нажмите Enter'); 
readln