create database wild_World;

use wild_World;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(50),
senha varchar(100)
);
alter table usuario modify column senha varchar(100);

create table especie(
idEspecie int auto_increment,
habitat varchar(45),
nome varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario(idusuario),
primary key(idEspecie, fkUsuario)
);

select * from especie;
select * from usuario;
select habitat, count(habitat) as quantidade from especie group by habitat;
desc usuario;

			select count(nome) as leao,
            (select count(nome) from especie where nome = 'araraAzul') as araraAzul,
            (select count(nome) from especie where nome = 'ariranha') as ariranha,
            (select count(nome) from especie where nome = 'elefanteAsiatico') as elefanteAsiatico,
            (select count(nome) from especie where nome = 'micoLeaoDourado') as micoLeaoDourado,
            (select count(nome) from especie where nome = 'tubaraoBaleia') as tubaraoBaleia,
            (select count(nome) from especie where nome = 'gorilaDaMontanha') as gorilaDaMontanha,
            (select count(nome) from especie where nome = 'tartarugaDeCouro') as tartarugaDeCouro,
            (select count(nome) from especie where nome = 'antilopeSeiga') as antilopeSeiga,
            (select count(nome) from especie where nome = 'orangotango') as orangotango,
            (select count(nome) from especie where nome = 'rinoceronte') as rinoceronte,
            (select count(nome) from especie where nome = 'loboGuara') as loboGuara,
            (select count(nome) from especie where nome = 'tartarugaMarinha') as tartarugaMarinha,
            (select count(nome) from especie where nome = 'macacoNarigudo') as macacoNarigudo,
            (select count(nome) from especie where nome = 'aguiaCinzenta') as aguiaCinzenta,
            (select count(nome) from especie where nome = 'oncaPintada') as oncaPintada,
            (select count(nome) from especie where nome = 'tigre') as tigre,
            (select count(nome) from especie where nome = 'jiboiaAmarela') as jiboiaAmarela
            from especie where nome = 'leao';
            

