import { CategoriaUsuarioRepository } from "../db/repositories/categoria-usuario-repository";
import { UsuarioRepository } from "../db/repositories/usuario-repository";
import { CreateUserRequest } from "../requests/create-user-request";
import _ from 'lodash';

export class CreateUserFacede {
  private usuarioRepository: UsuarioRepository;
  private categoriaUsuarioRepository: CategoriaUsuarioRepository;

  public onSuccess = () => {}
  public onError = () => {}

  constructor() {
    this.usuarioRepository = new UsuarioRepository();
    this.categoriaUsuarioRepository = new CategoriaUsuarioRepository();
  }
 
  public async execute(createUser: CreateUserRequest): Promise<void> {
    try {
      const user = await this.usuarioRepository.create({
        usu_contato: createUser.usu_contato,
        usu_nome: createUser.usu_nome,
        usu_cpf: createUser.usu_cpf,
        usu_nascimento: createUser.usu_nascimento,
      });

      for (const categoria of createUser.categorias) {
        await this.categoriaUsuarioRepository.create({
          usuario_id: user._id?.toString() ?? 'id not found',
          categoria_id: categoria,
        });
      }
      this.onSuccess()
    } catch (error) {
        this.onError()
        console.log(CreateUserFacede.name, error)
    }
  }
}
