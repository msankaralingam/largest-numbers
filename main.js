var a=[3,8,3,65,78690];
function sankara(a)
{
	for(i=0;i<a.length;i++)
	{
		for(j=1;j<a.length;j++)
		{
			if(a[i]<a[j]){
			temp=a[j];
			a[j]=a[i];
			a[i]=temp;
			}
		}
	}
	return a[0];
}
  console.log(sankara(a))