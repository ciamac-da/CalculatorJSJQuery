function Calc(Val) {
	if (Val != "=")
		document.form.txtVal.value = document.form.txtVal.value + Val;
	else
		document.form.txtVal.value = eval(document.form.txtVal.value);
}