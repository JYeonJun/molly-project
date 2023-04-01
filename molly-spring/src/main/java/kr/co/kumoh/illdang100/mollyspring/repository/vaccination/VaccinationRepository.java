package kr.co.kumoh.illdang100.mollyspring.repository.vaccination;

import kr.co.kumoh.illdang100.mollyspring.domain.vaccinations.VaccinationHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VaccinationRepository extends JpaRepository<VaccinationHistory, Long> {

    List<VaccinationHistory> findByPetId(Long petId);
}
