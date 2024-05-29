package net.javaguides.ems.repository;

import net.javaguides.ems.data_types.EmployeeType;
import net.javaguides.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByEmployeeType(EmployeeType employeeType);
}
