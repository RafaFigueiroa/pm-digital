package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.model.Viatura;
import com.fmgcompany.mike.repository.ViaturaRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ViaturaService {
    @Autowired
    private ViaturaRepository viaturaRepository;

    @Transactional
    public List<Viatura> listarTodas(){
        return this.viaturaRepository.findAll();
    }

    @Transactional
    public Optional<Viatura> buscarPorId(UUID id){
        return this.viaturaRepository.findById(id);
    }

    @Transactional
    public Denuncia denunciaViatura(String placa){
        Optional<Viatura> viaturaOptional = this.viaturaRepository.findByPlaca(placa);

        if(viaturaOptional.isPresent()){
            Viatura viatura = viaturaOptional.get();

            return viatura.getDenuncia();
        } else {
            return null;
        }
    }

    public Viatura criarViatura(Viatura viatura){
        return viaturaRepository.save(viatura);
    }

    public Viatura atualizar(UUID id, Viatura viaturaAlterada) {
        Optional<Viatura> viaturaOptional = this.viaturaRepository.findById(id);

        if (viaturaOptional.isPresent()) {
            Viatura viatura = viaturaOptional.get();

            // Atualize os campos
            if (viaturaAlterada.getPlaca() != null) {
                viatura.setPlaca(viaturaAlterada.getPlaca());
            }
            if (viaturaAlterada.getPoliciais() != null) {
                viatura.setPoliciais(viaturaAlterada.getPoliciais());
            }
            if (viaturaAlterada.getDenuncia() != null) {
                viatura.setDenuncia(viaturaAlterada.getDenuncia());
            }

            // Salve as alterações no banco de dados
            return this.viaturaRepository.save(viatura);
        } else {
            throw new EntityNotFoundException("Viatura com ID " + id + " não encontrada.");
        }
    }


    public void deletarPorId(UUID id){
        this.viaturaRepository.deleteById(id);
    }

    //método puxado em Post de DenunciaController
    public boolean isDisponivel(UUID id) {
        return viaturaRepository.findById(id)
                .map(viatura -> viatura.getDenuncia() == null)
                .orElse(false);
    }

}
