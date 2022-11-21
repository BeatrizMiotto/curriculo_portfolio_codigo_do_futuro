import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formataCpf'
})
export class FormataCpfPipe implements PipeTransform {

  transform(cpf: Number): String {
    let cpfFormatado = cpf.toString();
    return cpfFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

}
